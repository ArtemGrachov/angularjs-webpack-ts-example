import { IComponentOptions } from 'angular';
import { FeedbackService } from '../../../services/feedback.service';
import { Feedback } from '../../../models/feedback.model';

class Controller {
    constructor(private feedbackService: FeedbackService) { }
    static readonly $inject: string[] = [FeedbackService.serviceName];
    public feedbackForm: Feedback;

    sendFeedback() {
        this.feedbackService.sendFeedback(this.feedbackForm);
        this.feedbackForm = { name: 'Guest', email: '', phone: '', message: '' };
    }
}

export const FeedbackComponent: IComponentOptions = {
    controller: Controller,
    template: require('./feedback.component.html')
}