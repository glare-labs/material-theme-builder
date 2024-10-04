import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export class MaterialThemeVariantService {
    public get variants() {
        return [
            'Monochrome',
            'Neutral',
            'TonalSpot',
            'Vibrant',
            'Expressive',
            'Fidelity',
            'Content',
            'Rainbow',
            'FruitSalad'
        ]
    }
}
