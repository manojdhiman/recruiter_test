recruiter_test
==============
Uploading On git hub
1) install the git on linux by running this command 
	sudo apt-get install git
2) configue the username and email in the config file 
	git config --global user.name "your name"                       // manojdhiman
	git config --global user.email "your@email.com"			// manoj@rudrainnovatives.com

3) go to the path of you project which one you want to upload on the git by command 
	cd /path/to/project/                          // cd /var/www/test_project
	
4) initialize the git by command 
	git init
5) add the files to the temp. folder by the command 
	git add *           // if you want to add all the files in the folder
	git add filename              //  to add the specific file 
6)  commit the change that file can add to the temp folder by the command 
	git commit -m "commit message"      
7)  optional ; you can check the status of the files added by you by the command
	git status
8)  before hitt the push command double check the ssh key on the git account if not available you can add the key to the github account follow the link 
	https://help.github.com/articles/generating-ssh-keys/
9) make the remote connection by running the following command 
	git remote add origin git@github.com:DesignerMichelle/recruiter.git
	where orign is the name for the session of the remote . this may be change 
10) push the repo on the live Git by running the following command 
	git push -f origin master
	
	You have done , you can check the files on you repository 









this is a test from the recruiter
