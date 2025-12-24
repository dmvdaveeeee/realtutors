// dashboard.js
import { auth, db } from "./firebase.js";
import { onAuthStateChanged, signOut } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  collection,
  query,
  where,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const gradesDiv = document.getElementById("grades");
const avgSpan = document.getElementById("avg");

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "index.html";
    return;
  }

  const q = query(
    collection(db, "grades"),
    where("studentEmail", "==", user.email)
  );

  const snap = await getDocs(q);

  let total = 0;
  let count = 0;

  snap.forEach(doc => {
    const g = doc.data();
    gradesDiv.innerHTML += `
      <div class="bg-white p-3 rounded shadow">
        ${g.assignment} — ${g.score}%
      </div>
    `;
    total += g.score;
    count++;
  });

  avgSpan.textContent = count ? (total / count).toFixed(1) : "--";
});

document.getElementById("logout").onclick = async () => {
  await signOut(auth);
  window.location.href = "index.html";
};

document.getElementById("unlock").onclick = () => {
  const pass = document.getElementById("testPass").value;
  const status = document.getElementById("status");

  if (pass === "SUNDAY123") {
    status.textContent = "Test unlocked!";
    status.className = "text-green-600";
  } else {
    status.textContent = "Wrong password";
    status.className = "text-red-600";
  }
};
