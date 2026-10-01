const boot = [
  "[ OK ] 888 DIGITAL FACTORY kernel",
  "[ OK ] biometric interface initialized",
  "[ OK ] GitHub connection: READY",
  "[ OK ] Terraform engine: READY",
  "[ OK ] AWS/AZURE control plane: READY",
  "[ OK ] Kubernetes orchestrator: READY",
  "[ OK ] CI/CD pipeline: ARMED",
  "",
  "root@factory:~$ terraform plan",
  "Plan: 8 to add, 0 to change, 0 to destroy.",
  "",
  "root@factory:~$ kubectl get nodes",
  "factory-node-01   Ready",
  "factory-node-02   Ready",
  "factory-node-03   Ready",
  "",
  ">>> SYSTEM STATUS: OPERATIONAL"
];

const terminal = document.getElementById("terminalText");
let i=0;
function typeLine(){
  if(i >= boot.length) return;
  terminal.textContent += boot[i] + "\n";
  i++;
  setTimeout(typeLine, i < 8 ? 170 : 80);
}
typeLine();

const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.style.opacity="1";
      e.target.style.transform="translateY(0)";
    }
  });
},{threshold:.12});
cards.forEach(c=>{
  c.style.opacity="0";
  c.style.transform="translateY(25px)";
  c.style.transition="opacity .6s ease, transform .6s ease, border-color .3s, box-shadow .3s";
  observer.observe(c);
});
