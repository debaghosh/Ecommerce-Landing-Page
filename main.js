const loader = document.querySelector('#loader');
console.log(loader);
const loading=()=>{
  loader.style.display='none';
}
const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');
      menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      showcase.classList.toggle('active');
})