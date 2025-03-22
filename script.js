document.querySelector('.contact-form form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const submitButton = this.querySelector('button');
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitButton.disabled = true;

    const templateParams = {
        from_name: this.querySelector('input[type="text"]').value,
        from_email: this.querySelector('input[type="email"]').value,
        subject: this.querySelector('input[placeholder="Subject"]').value,
        message: this.querySelector('textarea').value
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function() {
            submitButton.innerHTML = '<i class="fas fa-check"></i> Sent Successfully!';
            setTimeout(() => {
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            }, 3000);
            event.target.reset();
        }, function(error) {
            submitButton.innerHTML = '<i class="fas fa-exclamation-circle"></i> Failed to send';
            console.error('Failed to send email:', error);
            setTimeout(() => {
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            }, 3000);
        });
});