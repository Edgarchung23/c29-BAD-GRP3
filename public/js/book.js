async function fetchBooks() {
  try {
    let res = await fetch("/chapter/reader", {
      method: "GET",
    });

    let result = await res.json();
    let data = result.data;

    // console.log("fetch result:", data);

    let homeHTML = "";

    for (let book of data) {
      // console.log(book.book_cover);
      homeHTML += `
            <div class="card"> 
           <a href="../html/reader.html?book=${book.name}"><img src="${book.book_cover}" id="bookPh" /></a>
        </div>
            `
        }

         // Assuming you have a container in your HTML where you want to display the books
         document.querySelector(".books-container").innerHTML = homeHTML;

    } catch (error) {
        console.error("Error fetching books:", error.message);
    }



}
fetchBooks();



