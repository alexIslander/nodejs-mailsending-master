# nodejs-mailsending

This is a small NodeJs server. Main and only feature is:
- to send email to you with given configuration.

Use case: A backend service for a website contact form. When a person gives his/her `name`, `email address`, `subject of message` and the `message` sent to you. The endpoint will send you an email.

# Repository

```bash
git clone https://github.com/alexIslander/nodejs-mailsending-master.git
```


# Install
```bash
npm i
```

Change gmail user name and password (given in example).

# Configuration

Create/change a '.env' file with following content:

```text
PORT=<port_number_of_your_serivce>
MAIL_SERVER=<your_mail_server>
USER=<user_on_mail_Server>
PWD=<user_password>
TO_EMAIL=<targer_email_address>
```
Example gmail config:
```text
PORT=5000
MAIL_SERVER=smtp.gmail.com
USER=example@gmail.com
PWD=Password1
TO_EMAIL=example@gmail.com
```

# Run
```bash
npm start
```

# Test

It can be tested from POSTMAN. See details in `postman_test.JPG`.
