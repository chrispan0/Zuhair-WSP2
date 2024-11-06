git fetch
git pull
docker stop zuhair-wsp2
docker rm zuhair-wsp2
cd C:\Users\Administrator\Documents\Zuhair\Zuhair-WSP2
docker build -t zuhair-wsp2 .
docker run -d -p 3336:4000 --name zuhair-wsp2 zuhair-wsp2
pause