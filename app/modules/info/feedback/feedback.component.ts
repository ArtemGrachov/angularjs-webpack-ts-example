import { IComponentOptions } from 'angular';
import { FeedbackService } from '../../../services/feedback.service';
import { Feedback } from '../../../models/feedback.model';

class controller {
    constructor(private feedbackService: FeedbackService) { }
    static readonly $inject: string[] = [FeedbackService.serviceName];
    public feedbackForm: Feedback;

    sendFeedback() {
        this.feedbackService.sendFeedback(this.feedbackForm);
        this.feedbackForm = new Feedback();
    }
}

export const FeedbackComponent: IComponentOptions = {
    controller: controller,
    template: require('./feedback.component.html')
}