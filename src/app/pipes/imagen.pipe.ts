import { Pipe, PipeTransform } from '@angular/core';

const URL='https://image.tmdb.org/t/p';

@Pipe({
  name: 'imagen'
})

export class ImagenPipe implements PipeTransform {

  
  transform(img: string, size:"w500"): any {
    if(!img){
      return ".asset/no-image-banner.png";
    }

    const imgUrl=`${URL}/w500${img}`;
    console.log(imgUrl);
    return imgUrl;
  }
}
