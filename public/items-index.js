const itemsAddBtn = document.getElementById('itms-btn');
const itemsDlg = document.getElementById('itms-dlg');
const itemsDlgExit = document.getElementById('dlg-exit');

//edit dialog
const editBtns = document.querySelectorAll('.dialod-open');
const editDlg = document.getElementById('itm-update');
const editExit = document.getElementById('updt-dlg-exit');


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

//edit dialog
editBtns.forEach(btn =>{
    //const id = btn.dataset.id;
    btn.addEventListener('click',()=>{
    editDlg.showModal();
    });
    editExit.addEventListener('click',()=>{
        editDlg.close();
    })
})



