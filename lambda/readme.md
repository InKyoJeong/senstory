## lambda 코드 수정시

```bash
$ cd lambda > git pull
$ sudo zip -r aws-upload.zip ./*     #파일묶기
$ aws s3 cp “aws-upload.zip” s3://senstory
이미지 리사이즈 함수 > 코드 소스 > Amazon S3위치에서
https://senstory.s3.ap-northeast-2.amazonaws.com/aws-upload.zip 추가
```
