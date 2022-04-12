    
    
    /* 
     * keyboard functions 
     */
    var click_count = 0;
  
    function showKeyboard() {
      var keyboard = document.getElementById("keyboard");
      keyboard.style = "display: block";
      click_count = 0;
    }

    function hideKeyboard() {
      var keyboard = document.getElementById("keyboard");
      if (keyboard.style.display == "block" && click_count == 0) {
        click_count += 1;
      } else {
        click_count = 0;
        keyboard.style = "display: none";
      }
    }

    /* 
     * load default data into local storage
     */ 
    function loadData() { 
        let reminder1 = localStorage.getItem("4");
        if (reminder1 == null) {
            localStorage.setItem("4","Make sure to go on a run today!");
            localStorage.setItem("4_time","09:00");
        }

        console.log(localStorage.getItem("4"));

        let reminder2 = localStorage.getItem("19");
        if (reminder2 == null) {
            localStorage.setItem("19","Consistancy is key! Make sure to log all your meals!");
            localStorage.setItem("19_time","12:00");
        }

        let reminder3 = localStorage.getItem("22");
        if (reminder3 == null) {
            localStorage.setItem("22","Make sure to take vitamins!");
            localStorage.setItem("22_time","10:00");
        }

        // create event symbol for all days with events 
        for (var i = 1; i <= 31; i++) {
            if ( localStorage.getItem(i) != null ) { 
                document.getElementById(i).className = "event";
            }
        }

    }

    /* 
     * render information for existing reminders 
     * called in reminders.html 
     */
    function showReminder(day) {
        document.getElementById("instruction").innerHTML = ""
        document.getElementById("reminder").className = "show";

        let reminder = localStorage.getItem(day)

        if (reminder != null) {
            document.getElementById("reminder-title").textContent = "April " + day + ", 2022";
            document.getElementById("reminder-content").textContent = reminder;
            var time_key = day + "_time";
            document.getElementById("reminder-time").textContent = "Remind at " + localStorage.getItem(time_key);

            document.getElementById(day).className = "event";
        } else {
          document.getElementById("reminder-title").textContent =
            "";
          document.getElementById("reminder-content").textContent =
            "No reminders for this day yet!";
            document.getElementById("reminder-time").textContent =
            "";
        }
      }
  
      /* 
       * render pages corresponding to tabs 
       * called in set_reminders.html
       */
      function openPage(pageName, elmnt) {
        // Hide all elements with class="tabcontent" by default */
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
  
        // Remove the background color of all tablinks/buttons
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].style.backgroundColor = "";
        }
  
        // Show the specific tab content
        document.getElementById(pageName).style.display = "block";
  
        // Add the specific color to the button used to open the tab content
        elmnt.style.backgroundColor = "#433495";
      }

      /* 
       * create new reminder
       */ 
      function setReminder() { 
        var date = document.getElementById("date").value;
        var d = new Date(date);
        day = d.getDate() + 1;
        console.log(day);

        var reminder = document.getElementById("reminder").value;
        var time = document.getElementById("time").value;

        console.log(reminder);
        console.log(time);

        localStorage.setItem(day, reminder);
        localStorage.setItem(day + "_time", time);
      }

      /* render information for existing reminders */
      function changeVal() {
        var r = document.getElementById("existing-reminders");
        var opt = r.value;
        
        let reminder = localStorage.getItem(opt);
        let time = localStorage.getItem(opt + "_time");
          
        document.getElementById("reminder-content").textContent = reminder;
        document.getElementById("reminder-time").value = time;
        
        document.getElementById("edit-reminders").className = "show";
      }

      /* 
       * update existing reminder
       */ 
      function editReminder() { 
        var r = document.getElementById("existing-reminders");
        var day = r.value;
        
        localStorage.setItem(day, document.getElementById("reminder-content").value);
        localStorage.setItem(day + "_time", document.getElementById("reminder-time").value);
    }

    /* 
       * update existing reminder
       */ 
    function deleteReminder() { 
        var r = document.getElementById("existing-reminders");
        var day = r.value;
        
        localStorage.removeItem(day);
        localStorage.removeItem(day + "_time");

        cosole.log(localStorage.getItem(day));
    }
