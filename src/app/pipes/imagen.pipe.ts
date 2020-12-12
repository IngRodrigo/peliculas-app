import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL=environment.imgPath;

@Pipe({
  name: 'imagen'
})

export class ImagenPipe implements PipeTransform {

  
  transform(img: string, size:"w500"): any {
    if(!img){
      return ".asset/no-image-banner.png";
    }

    const imgUrl=`${URL}/w500${img}`;
    //console.log(imgUrl);
    return imgUrl;
  }
}
