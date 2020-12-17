

function validate()
        {
            var contactno = document.getElementById("contact").value;
            var submit_button = document.getElementById("b1");
            var request = new XMLHttpRequest();
            request.open("POST","http://127.0.0.1:8000/validate_contact/",true);
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            request.send("cno="+contactno);
            request.onreadystatechange = show;

            function show()
            {
                if(request.readyState == 4)
                {
                  var res_text = request.responseText;
                  // converting text(string) to json
                  var json_data = JSON.parse(res_text);

                  if(json_data.result)
                  {
                     document.getElementById("s_contact").innerText = "This Contact No is Taken";
                     submit_button.disabled = true;
                  }
                  else
                  {
                      document.getElementById("s_contact").innerText = "";
                     submit_button.disabled = false;
                  }

                }
            }
        }


        function validate1()
        {
            var email = document.getElementById("email").value;
            var submit_button = document.getElementById("b1");
            var request = new XMLHttpRequest();
            request.open("POST","http://127.0.0.1:8000/validate/",true);
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            request.send("em="+email);
            request.onreadystatechange = show;

            function show()
            {
                if(request.readyState == 4)
                {
                  var res_text = request.responseText;
                  // converting text(string) to json
                  var json_data = JSON.parse(res_text);

                  if(json_data.result)
                  {
                     document.getElementById("s_email").innerText = "This email  is Taken";
                     submit_button.disabled = true;
                  }
                  else
                  {
                      document.getElementById("s_email").innerText = "";
                     submit_button.disabled = false;
                  }

                }
            }
        }

