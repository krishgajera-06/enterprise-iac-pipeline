resource "docker_container" "enterprise_container" {
  name  = "enterprise-app-tf"
  image = "enterprise-app:latest"

  ports {
    internal = 5000
    external = 5000
  }

  restart = "unless-stopped"
}