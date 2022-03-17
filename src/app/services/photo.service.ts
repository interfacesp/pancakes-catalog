import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Platform } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  

  constructor(private platform: Platform) { }


  public async getNewPhoto() {

    const takenPic= await Camera.getPhoto(
      {
        resultType: CameraResultType.Uri, 
        source:CameraSource.Camera,
        quality: 80
      }
    );

    //save it and return as UserPhoto 
    const savedPic = await this.savePicture(takenPic);
    
    return {
      webViewPath: savedPic.webViewPath, 
      filePath: savedPic.filePath
    }; 
    

  }

  public async readPhotoDataBase64(aPath: string){

      // console.log("reading path: " + aPath); 
      const readFile = await Filesystem.readFile(
        {
          path: aPath,
          directory: Directory.Data
        }
      );

      return `data:image/jpeg;base64,${readFile.data}`;
  }

  private async savePicture(aPhoto: Photo){
    //convert photo to base64 format, required by Filesystem API
    const base64Data = await this.readAsBase64(aPhoto);

    //Write file to data directory
    const fileName="WAD21_" + new Date().getTime() + ".jpeg";
    
    const savedFile = await Filesystem.writeFile({
      path: fileName, 
      data: base64Data,
      directory: Directory.Data
      }
    ); 

    if(this.platform.is("hybrid")){
         // Will later Display the new image by rewriting the 'file://' path to HTTP
        // Details: https://ionicframework.com/docs/building/webview#file-protocol

  
        return {
          filePath: savedFile.uri, 
          webViewPath: Capacitor.convertFileSrc(savedFile.uri)
        } ;

    }else {
      return {
        filePath: fileName,
        webViewPath: aPhoto.webPath
      } ; 
    }

  }

    private async readAsBase64(aPhoto: Photo) {
      //"hybrid" will detect capacitor / cordova - native runtimes
      if(this.platform.is("hybrid")){
            const file = await Filesystem.readFile(
              {
                path: aPhoto.path
              }
            ); 
  
            return file.data; 
      }else {
            // Fetch a photo ,read as a blob and convert to base64
            const response = await fetch(aPhoto.webPath);
            const blob = await response.blob();
  
            return await this.convertBlobToBase64(blob) as string;
      }
  
      
    }
  
    private convertBlobToBase64 = (blob: Blob) =>  new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onerror = reject;
            reader.onload = () => {
              resolve(reader.result);
            };
            reader.readAsDataURL(blob);
        }
    );
  



}

