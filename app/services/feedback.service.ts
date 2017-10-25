import { DataService } from './data.service';
import { Feedback } from '../models/feedback.model';
import { IPromise } from 'angular';

export class FeedbackService {
    constructor(private dataService: DataService) { }
    static readonly $inject: string[] = [DataService.serviceName];
    static readonly serviceName: string = 'FeedbackService';

    sendFeedback(feedback: Feedback): Promise<any> {
        return this.dataService.post('feedbacks', feedback);
    }

    getFeedbacks(): Promise<any> {
        return this.dataService.get('feedbacks')
    }

    deleteFeedback(id: string): Promise<any> {
        return this.dataService.remove('feedbacks/' + id);
    }
}