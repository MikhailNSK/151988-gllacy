
       var link = document.querySelector(".feedback-form");

           var popup = document.querySelector(".modal-content");
           var close = popup.querySelector(".modal-content-close");

           var form = popup.querySelector("form");
           var name = popup.querySelector("[name=name]");
           var number = popup.querySelector("[name=number]");

           var storage = localStorage.getItem("name");

             link.addEventListener("click", function(event) {
               event.preventDefault();
               popup.classList.add("modal-content-show");

               if (storage) {
                name.value = storage;
                  number.focus();
              }
        
              

              });

             close.addEventListener("click", function(event) {
               event.preventDefault();
               popup.classList.remove("modal-content-show");
               popup.classList.remove("modal-error");
              });

             form.addEventListener("submit", function(event) {
               if (!name.value || !number.value) {
                 event.preventDefault();
                 popup.classList.remove("modal-error");
                   popup.offsetWidth = popup.offsetWidth;
                 popup.classList.add("modal-error");
                 } else {
                     localStorage.setItem("name", name.value);
                 }
              });

              window.addEventListener("keydown", function(event) {
                if (event.keyCode === 27) {
                    if (popup.classList.contains("modal-content-show")) {
                    popup.classList.remove("modal-content-show");
                    popup.classList.remove("modal-error");
                  }
                }
            });
 