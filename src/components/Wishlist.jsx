import { useEffect } from "react";
export default function Wishlist() {

    function lists() {
        let intxt = document.getElementById("txt").value;

        console.log(intxt);

        let ourlist = document.createElement("li");
        ourlist.textContent = intxt;

        // Get the UL element by ID instead of class
        let ull = document.getElementById("list");

        let delbtn = document.createElement("button");
        delbtn.innerText = "delete";
        delbtn.addEventListener("click", delfunc)

        function delfunc() {
            ourlist.remove()
        }

        ourlist.appendChild(delbtn);

        // Append to the UL element
        ull.appendChild(ourlist);


        // 🔥 Save to localStorage
        let items = JSON.parse(localStorage.getItem("myList")) || [];
        items.push(intxt);
        localStorage.setItem("myList", JSON.stringify(items));


        // Clear the input field
        document.getElementById("txt").value = "";
    }
    function loadList() {
        let items = JSON.parse(localStorage.getItem("myList")) || [];
        let ull = document.getElementById("list");

        items.forEach(item => {
            let li = document.createElement("li");
            li.textContent = item;
            ull.appendChild(li);
        });
    }


    useEffect(() => {
        loadList();
    }, []);
    
    return (
        <>


        <div className="on">
            <div className="wish-1">
                <input type="text" id="txt"/>
                <button onClick={lists}>add </button>
            </div>
            <div className="wish-2">
                <ul id="list">
                    <li>Your list</li>
                </ul>
                
            </div>
        </div>
        
        
        
        
        
        
        
        
        
        
        </>


    );
}