const itemsAddBtn = document.getElementById('itms-btn');
const itemsDlg = document.getElementById('itms-dlg');
const itemsDlgExit = document.getElementById('dlg-exit');

console.log('running in items script mode');
itemsAddBtn.addEventListener('click',()=>{
    console.log('items btn clicked!');
    itemsDlg.showModal();
});
itemsDlgExit.addEventListener('click',()=>{s
    console.log('return to home');
    itemsDlg.close();
});
itemsDlg.addEventListener('close',()=>{
    itemsDlg.close();
});



