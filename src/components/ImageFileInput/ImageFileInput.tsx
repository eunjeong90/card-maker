import React, { useRef } from 'react';
import { ImageInputArea } from '../editor/cardStyles';

const ImageFileInput = ({ imageUpload, name, onFileChange }: any) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    inputRef.current?.click();
  };
  const onChange = async (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    const uploaded = await imageUpload.upload(file);
    console.log(uploaded);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };
  return (
    <ImageInputArea>
      <button onClick={onButtonClick}>{name || 'No File'}</button>
      <input
        ref={inputRef}
        id="profile-btn"
        name="file"
        className="ally-hidden"
        type="file"
        accept="image/*"
        onChange={onChange}
      />
    </ImageInputArea>
  );
};

export default ImageFileInput;
