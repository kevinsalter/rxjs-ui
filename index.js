import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/interval'
import 'rxjs/add/operator/take'


Observable.interval(1000).take(5).subscribe(x => console.log(x))
document.getElementById('root').textContent = 'i\'m alive'
