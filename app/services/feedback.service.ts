import { DataService } from './data.service';
import { Feedback } from '../models/feedback.model';

export class FeedbackService {
    constructor(private dataService: DataService) { }
    static readonly $inject: string[] = [DataService.serviceName];
    static readonly serviceName: string = 'FeedbackService';

    sendFeedback(feedback: Feedback) {
        this.dataService.post('feedbacks', feedback, false);
    }

    getFeedbacks(): any {
        return this.dataService.get('feedbacks', false)
    }
}