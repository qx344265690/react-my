
  import React from 'react'
  import './childrenPer.css'
  import { Upload, Icon, message} from 'antd';
  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
      message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
  }
  class Avatar extends React.Component{
    state = {
      loading: false,
    };
    handleChange = (info) => {
      if (info.file.status === 'uploading') {
        this.setState({ loading: true });
        return;
      }
      if (info.file.status === 'done') {
        getBase64(info.file.originFileObj, imageUrl => this.setState({
          imageUrl,
          loading: false,
        }));
      }
    }
    render() {
      const uploadButton = (
        <div className="uploadNav">
          <Icon type={this.state.loading ? 'loading' : 'plus'} />
          <div className="ant-upload-text">上传头像</div>
        </div>
      );
      const imageUrl = this.state.imageUrl;
      return (
        <div>
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action="https://www.easy-mock.com/mock/5ad97988cd7dd656524663f6/qx/sign"
          beforeUpload={beforeUpload}
          onChange={this.handleChange}
        >
          {imageUrl ? <img className="avatarImg" src={imageUrl} alt="" /> : uploadButton}
        </Upload>
        </div>
      );
    }
  }
  export default Avatar
