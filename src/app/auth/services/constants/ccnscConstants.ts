
export const signinErrorCode = {
  "Invalid Email": {
    code: "auth/invalid-email",
    message: "Entrez une adresse e-mail valide"
  },
  "User Disabled": {
    code: "auth/user-disabled",
    message: "Le compte avec l'e-mail correspondant est désactivé"
  },
  "User not found": {
    code: "auth/user-not-found",
    message: "Aucun utilisateur de ce type n'a été trouvé avec l'e-mail correspondant"
  },
  "Wrong password": {
    code: "auth/wrong-password",
    message: "Le mot de passe ne correspond pas"
  }
};

export const recoverAccountCode = {
  "Invalid Email": {
    code: "auth/invalid-email",
    message: "Entrez une adresse e-mail valide"
  },
  "User not found": {
    code: "auth/user-not-found",
    message: "Aucun e-mail de ce type n'est enregistré"
  }
};

export const signupErrorCodes = {
  "Email Already in use": {
    code: "auth/email-already-in-use",
    message: "Cet e-mail est pris"
  },
  "Invalid Email": {
    code: "auth/invalid-email",
    message: "Entrez une adresse e-mail valide"
  },
  "Invalid Operation": {
    code: "auth/operation-not-allowed",
    message: "Le site n'a pas d'autorisation"
  },
  "Weak Password": {
    code: "auth/weak-password",
    message: "Le mot de passe est trop faible"
  }
};

// export const passwordRegex='/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm';
export const passwordRegex =
  "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$";
