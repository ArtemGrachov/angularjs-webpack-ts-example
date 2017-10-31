export class EditService {
    public static readonly serviceName: string = 'EditService'
    getUpdated(form: any) {
        let updated: any = {};
        for (let control of form.$$controls) {
            if (control.$dirty && control.$name) {
                updated[control.$name] = control.$modelValue;
            }
        }
        return updated;
    }
}