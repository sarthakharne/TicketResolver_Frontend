pipeline {
     environment{
        dockerimage=""
    }
    agent any
    stages {
        stage('Git clone') {
            steps {
            git branch: 'master',url: 'https://github.com/sarthakharne/TicketResolver_Frontend.git'
            }
        }
        stage('Docker Build Image') {
            steps {
                script{
                    dockerimage=docker.build "sarthakharne2262/TicketResolver_Frontend"   
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script{
                    docker.withRegistry('','dockerhub'){
                    dockerimage.push()
                    }
                }
            }
        }
          stage("Removing Image from local"){
            steps{
                sh "docker rmi sarthakharne2262/TicketResolver_Frontend"
            }
        }

        stage('Ansible pull docker image') {
            steps {
                ansiblePlaybook colorized: true,
                credentialsId: 'DockerHubCred',
                disableHostKeyChecking: true,
                inventory: 'inventory',
                playbook: 'ansible-playbook.yml',
                vaultCredentialsId: 'vault-pass'
            }
        }
      
    }
}
