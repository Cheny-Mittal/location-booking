

export class UtilFunctions {
  public static EMAIL_REG_EXP = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  public isValidEmail(control: any) {
    if (control.value && (UtilFunctions.EMAIL_REG_EXP.test(control.value))) {
      return null;
    }
    return {'valid': false};
  }

}
