# Learning Nodejs

- This package is prepare for testing purpose.


# build
```bash
## without plain output
DOCKER_BUILDKIT=0 BUILDKIT_PROGRESS=plain docker build .  --no-cache --compress -t test

## 
docker build .  --no-cache --compress -t test:v1.0.0

```

# Run locally
```bash
docker run -p 8081:8081 test:v1.0.0 nodejs
```