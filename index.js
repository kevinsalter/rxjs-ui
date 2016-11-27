import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/interval'
import 'rxjs/add/operator/take'


const stopwatch = Observable.interval(1000).take(5).subscribe(x => console.log(x))
