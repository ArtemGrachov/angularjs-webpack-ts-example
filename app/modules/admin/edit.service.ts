export class EditService {
    public static readonly serviceName: string = 'EditService'
    submit(form: any, service: any) {
        let updated: any = {};
        for (let control of form.$$controls) {
            if (control.$dirty) {
                updated[control.$name] = control.$modelValue;
            }
        }
        console.log(updated);
    }
}