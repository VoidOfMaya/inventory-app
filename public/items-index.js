const itemsAddBtn = document.getElementById('itms-btn');
const itemsDlg = document.getElementById('itms-dlg');
const itemsDlgExit = document.getElementById('dlg-exit');

//display dialog
itemsAddBtn.addEventListener('click',()=>{

    itemsDlg.showModal();
});
itemsDlgExit.addEventListener('click',()=>{

    itemsDlg.close();
});
itemsDlg.addEventListener('close',()=>{
    itemsDlg.close();
});




