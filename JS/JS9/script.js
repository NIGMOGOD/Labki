const tabs = document.querySelectorAll('.tabs-title');
const tabContents = document.querySelectorAll('.tabs-content li');

function switchTab(index) {
   tabs.forEach(tab => tab.classList.remove('active'));
   tabContents.forEach(content => content.classList.remove('active'));

   tabs[index].classList.add('active');
   tabContents[index].classList.add('active');
}

tabs.forEach((tab, index) => {
   tab.addEventListener('click', () => switchTab(index));
});