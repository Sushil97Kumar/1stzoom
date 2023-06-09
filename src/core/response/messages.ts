export {};

const ERROR_MSG = {
    "ACCOUNT-NOT-EXIST":'Account does not exist.',
    "PASSWORD-MISMATCH":"Password does not match.",
    "PASSWORD-NOT-EMPTY": "Password required.",
    "USER-NOT-ACTIVE":"Your account is not active.",
    "EMAIL-ALREADY-EXIST":"Email already registered.",
    "SYSTEM-ERROR":"We're experiencing technical difficulties. Please try again later.",
    "ACCOUNT-NOT-REGISTERD":"Account does not exist.",
    "USE-ANOTHER-PASSWORD":"You've used this password recently. Please choose a different one.",
    "NO-RECORD-FOUND":"No record found.",
    "ALREADY-EXIST":"Already exists.",
    "ACCOUNT-NOT-VERIFIED": "Account is not verified. Please check your email and verify your account.",
    "LINK-EXPIRED": "The link has expired or already used.",
    "INVALID-ACCOUNT-TOKEN":"Invalid/expired link. Please make sure that you have used correct email link.",
    "FORGOT-PASSWORD-INACTIVE-ACCOUNT": "This request cannot be processed as your account is not verified. Please verify your account first.",
    "OLD-PASSWORD-NOT-MATCHED": "Old password does not match. Please check and try again.",
    "TOKEN-NOT-PROVIDED": "Link expired.",
    "INVALID-TOKEN": "Invalid Link.",
    "BEARER-TOKEN-NOT-PROVIDED": "We're experiencing technical difficulties. Please try again later.",
    "ADMIN-NOT-VERIFIED": "Your account is under review. We will notify you by email once approved.",
    "TOKEN-EXPIRED": "Your email verification link has expired. Login to resend your verification email again.",
    "PROPERTY-EXIST": "Property already exists.",
    "PAYMENT-FAILED" :"Payment failed.",
    "USER-EXIST-OTHER-PROPERTY": "This tenant is already associated with another property.",
    "NOT-APPROVED-BY-ADMIN": "The tenant’s account is pending approval.",
    "EMAIL-NOT-VERIFIED": "The tenant has not verified their email.",
    "USER-EXIST-IN-PROPERTY": "A tenant is associated with this property. Please remove them first.",
    "USER-STATUS-PENDING": "Your request has been sent to the tenant for approval.",
    "USER-ASSOCIATE-IN-PROPERTY": "The tenant is already associated with this property.",
    "USER-STATUS-REJECTED": "Request rejected.",
    "USER-EXISTS-IN-PROPERTY": "The tenant is already associated with this property.",
    "PROPERTY-TYPE-EXIST":"Property type already exists.",
    "LANDLORD-HAS-PROPERTY":"Landlord have Property.",
    "PROPERTY-HAS-TENANT": "Sorry!! this property have occupied by someone else",
    "REQUEST-ALREADY-SENT":"Request already sent.",
    "SUBSCRIPTION-NOT-EXIST": "You are not subscribed to a plan.",
    "ALREADY-SUBSCRIBED": "You already have an active subscription.",
    "NO-PAYMENT-EXIST":"Payment failed.",
    "ALREADY-PAY":"You've already made a payment. Please check the history tab for this tenant.",
    "ACCOUNT-DELETED": "Your account was deleted. Please contact us.",
    "ACCOUNT-BLOCKED-BY-ADMIN": "Your account is blocked. Please contact us.",  
    "ACCOUNT-DEACTIVATED": "Your account is deactivated. Please contact us.",
    "TENANT-NOT-ASSOCIATED": "There are no tenants to send notifications to."
}

const SUCCESS_MSG = {
    errorBoolean: false,
    "USER-UPDATED" : "User updated successfully",
    "USER-STATUS-UPDATED" : "User status updated successfully",
    "USER-DELETED" : "User deleted successfully",  
    "QUESTION-UPDATED" : "Question updated successfully",
    "QUESTION-STATUS-UPDATED" : "Question status updated successfully",
    "QUESTION-DELETED" : "Secret question deleted successfully",
    "NOTIFICATION-DELETED" : "Notification deleted successfully",  
    "NOTIFICATION-UPDATED" : "Notification updated successfully",
    "PAYMENT-SUCCESS" :  "Payment received. Thank you.",
    "PAYMENT-STATUS-SUCCESS": "Payment status updated.",
    "PROPERTYTYPE-STATUS-UPDATED" : "Property type status updated successfully",
    "PROPERTYTYPE-DELETED" : "Property type deleted successfully",
    "PROPERTYTYPE-UPDATED" : "Property type updated successfully",
    "TENANT-DISSOCIATE": "The tenant has been removed from your property. "
}

module.exports = {ERROR_MSG, SUCCESS_MSG}