(function(){
    const inputEl = document.getElementById("searchInput");
    const boxes = document.querySelectorAll(".box");
    let count = 0;
    const colors = [
        'red',
        'blue',
        'red',
        'green',
        'brown',
        'yellow',
        'pink', 
        'orange'
    ]; 
    boxes.forEach((box) => {
        colorAllBoxes(box);
    });

    function colorAllBoxes(box){
     box.style.backgroundColor = colors[count];
     addDataset(box, colors[count]);  
     count++;
    }

    function addDataset(box, color){
        box.setAttribute("data-color", color);
    }

    inputEl.addEventListener('keyup', filterBoxes, false);

    function filterBoxes(){
        let entry = this.value.toLowerCase().trim();
        boxes.forEach(box => {
            let boxColor = box.style.backgroundColor;

            if(boxColor.includes(entry)){
                box.classList.remove('remove');
            }else {box.classList.add('remove');}
        });
    }
}());