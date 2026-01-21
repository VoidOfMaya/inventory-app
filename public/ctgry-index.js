const categoryAddBtn = document.getElementById('ctgry-btn');
const categoryDlg = document.getElementById('ctgry-dlg');

const ctgryDlgExit = document.getElementById('dlg-exit');


categoryAddBtn.addEventListener('click',()=>{

    categoryDlg.showModal();
});  
categoryDlg.addEventListener('close',()=>{
    categoryDlg.close();
})
ctgryDlgExit.addEventListener('click',()=>{
    categoryDlg.close();
})


