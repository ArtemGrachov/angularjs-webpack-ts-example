import { DataService } from './data.service';
import { Feedback } from '../models/feedback.model';
import { IPromise } from 'angular';

export class FeedbackService {
    constructor(private dataService: DataService) { }
    static readonly $inject: string[] = [DataService.serviceName];
    public static readonly serviceName: string = 'FeedbackService';

    sendFeedback(feedback: Feedback): any {
        return this.dataService.post('/feedbacks/', feedback);
    }

    getFeedbacks(): any {
        return this.dataService.get('/feedbacks/')
    }

    getFeedback(id: string): any {
        return this.dataService.get('/feedbacks/' + id);
    }

    deleteFeedback(id: string): any {
        return this.dataService.remove('/feedbacks/' + id);
    }
}