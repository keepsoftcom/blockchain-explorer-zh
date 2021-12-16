# hyperledger Fabric 2.3 Network

[Install Fabric and Fabric Samples](https://hyperledger-fabric.readthedocs.io/en/latest/install.html)
[Using the Fabric test network](https://hyperledger-fabric.readthedocs.io/en/latest/test_network.html)

## System Dependencies

- docker & docker-compose & config registry-mirrors
- git
- golang

## Get fabric sourcecode
```bash
mkdir -p $GO_PATH/src/github.com/hyperledger
cd $GO_PATHsrc/github.com/hyperledger
git clone https://github.com/hyperledger/fabric.git

cd ./fabric
git fetch --tags
git checkout tags/v2.3.3 -b v2.3.3
```

## Get fabric-samples
### automatically clone source repo and pull binaries and docker images
The version relationship refer `hyperledger/fabric/vx.y.z/scripts/bootstrap.sh`
```bash
cd ./fabric/scripts
./bootstrap.sh 2.3.3 1.5.2
# or execute default: ./bootstrap.sh
```
### manually clone
#### clone fabric-samples
```bash
git clone https://github.com/hyperledger/fabric-samples.git
cd ./fabric-samples
git branch -a
git checkout main
```
#### pull binaries
1. Download From [GitHub Release Page](https://github.com/hyperledger/fabric/releases)
2. unzip fabric and fabric-ca
3. merge bin and config
4. copy to ./fabric-samples/

#### pull docker images
```bash
cd ./fabric/scripts
./bootstrap.sh -s -b # SAMPLES=false and BINARIES=false
```

## Build test-network
```bash
cd fabric-samples/test-network
./network.sh up
```
