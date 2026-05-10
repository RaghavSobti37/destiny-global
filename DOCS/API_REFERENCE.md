# API Reference - Destiny Global

This document documents the backend API endpoints used for form submissions and external integrations.

---

## 📩 Contact API

Handles the product inquiry form from the frontend.

### Endpoint
`POST /api/contact`

### Request Body (JSON)
```json
{
  "name": "John Doe",
  "company": "Global Imports Ltd",
  "country": "Germany",
  "product": "Dehydrated Onion Powder",
  "quantity": "5000 kg",
  "packaging": "25kg Bags",
  "message": "We are interested in a long-term contract."
}
```

### Response
- **Success (200 OK)**:
  ```json
  { "success": true }
  ```
- **Error (400 Bad Request)**: Missing required fields.
- **Error (500 Internal Server Error)**: Email delivery failure or server error.

### Email Integration
The API uses **Nodemailer** to send a professional HTML email to the configured administrator email address. The email includes:
- Contact information section.
- Product requirements section.
- Formatted customer notes.
- Mobile-responsive layout.

---

## 🛠️ Environment Variables

The following variables must be set in `.env.local` for the API to function:

| Variable | Description |
| :--- | :--- |
| `EMAIL_USER` | Gmail address for sending inquiries. |
| `EMAIL_PASSWORD` | App-specific password for the Gmail account. |

---

- **Status**: Pending
- **Utility Messages**: Documentation for AiSensy message templates will be added here once implemented.
