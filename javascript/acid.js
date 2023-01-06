function toggleRow(rowId, buttonId) {
    
    var rows = document.querySelectorAll("#"+rowId);
    var button = document.getElementById(buttonId);
    for(i = 0; i < rows.length; i++)
    {
        if (rows[i].style.display === "none") 
        {
            rows[i].style.display = "";
        } 
        else 
        {
            rows[i].style.display = "none";
        }
    }
    if(button.innerHTML.substring(0,4) === "Hide")
    {
        button.innerHTML = "Show" + button.innerHTML.substring(4);
    }
    else
    {
        button.innerHTML = "Hide" + button.innerHTML.substring(4);
    }
}