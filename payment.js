const submitBtn = document.getElementById("submitBtn");
        const paymentForm = document.getElementById("paymentForm");
        const selectedMethod = document.getElementById("selectedMethod");
        const paymentStatus = document.getElementById("paymentStatus");


        submitBtn.addEventListener("click", () => {
           
            const paymentMethod = document.querySelector('input[name="payment_method"]:checked');

            if (paymentMethod) {
              
                selectedMethod.textContent = 'Youselected: ${paymentMethod.value}';
                selectedMethod.style.display = "block";
                
            
                finalizePayment(paymentMethod.value);
            } else {
                
                alert("Please select a payment method.");
            }
        });

   
        function finalizePayment(method) {
           
            paymentStatus.style.display = "none"; 
            setTimeout(() => {
              
                paymentStatus.style.display = "block";
                paymentStatus.textContent = 'Payment with ${method} was successful!';
                paymentStatus.classList.remove("error");
                paymentStatus.classList.add("result");  

            }, 2000); 
        }