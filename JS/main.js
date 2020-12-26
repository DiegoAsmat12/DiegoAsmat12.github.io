function toggle(){
    const toggle = document.querySelector('.toggle');
    const effector= document.querySelector('.banner');
    const links=document.querySelector('.nav-links');
    toggle.classList.toggle('active');
    effector.classList.toggle('active');
    links.classList.toggle('active');
}
