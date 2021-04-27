function EnableDisableTextBox(chkOthers) {
    var OtherField = document.getElementById('other');
    OtherField.disabled = chkOthers.checked ? false : true;
    if (!OtherField.disabled) {
        OtherField.focus();
    }
}