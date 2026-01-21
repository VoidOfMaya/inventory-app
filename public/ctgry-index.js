const categoryAddBtn = document.getElementById('ctgry-btn');
const categoryDlg = document.getElementById('ctgry-dlg');

const ctgryDlgExit = document.getElementById('dlg-exit');


console.log('running in category script mode');
categoryAddBtn.addEventListener('click',()=>{
    console.log('ctgry btn clicked!');
    categoryDlg.showModal();
});  
categoryDlg.addEventListener('close',()=>{
    categoryDlg.close();
})
ctgryDlgExit.addEventListener('click',()=>{
    categoryDlg.close();
})


