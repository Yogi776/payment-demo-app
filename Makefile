# Variables
DOCKER_USERNAME = modern123
IMAGE_NAME = inmoment_intelligence_app
VERSION = 1.9
# Login to Docker Hub
login:
	@echo "Logging into Docker Hub..."
	docker login -u $(DOCKER_USERNAME) -p 

# Build the Docker image with version tagging
build:
	@echo "Building Docker image with version tag: $(VERSION)..."
	docker build -t $(DOCKER_USERNAME)/$(IMAGE_NAME):$(VERSION) .

# Push the Docker image to Docker Hub
push: build
	@echo "Pushing Docker image to Docker Hub with version tag: $(VERSION)..."
	docker push $(DOCKER_USERNAME)/$(IMAGE_NAME):$(VERSION)

# Clean up local Docker images
clean:
	@echo "Cleaning up local Docker images..."
	docker rmi $(DOCKER_USERNAME)/$(IMAGE_NAME):$(VERSION) || true

# Select the environment context using dataos-ctl
select-context:
	@echo "Selecting dataos-ctl context: $(ENVIRONMENT)..."
	dataos-ctl context select -n $(ENVIRONMENT)

# Delete existing resources using dataos-ctl
delete-resources:
	@echo "Deleting resources using dataos-ctl...$(CONFIG_PATH)..."
	dataos-ctl delete -f $(CONFIG_PATH)

# Wait for 5 seconds before applying new configuration
wait:
	@echo "Waiting for 5 seconds..."
	sleep 5

# Apply the new configuration using dataos-ctl
apply-config:
	@echo "Applying configuration from $(CONFIG_PATH)..."
	dataos-ctl apply -f $(CONFIG_PATH)

# Complete process: login, build, push, and update deployment
all: login build push 
