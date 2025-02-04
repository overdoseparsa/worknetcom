from pathlib import Path
BASE_DIR = Path(__file__).resolve().parent.parent
print(BASE_DIR)
def create_file_upload(file_name):

    with open(f'{BASE_DIR}/file/file_name'  ,'w+') as test :
        test.write('hello')
    test.close()


from django.templatetags.static import static
# TODO we will change from django uploader this is just for test  from server 
class FileUploadSimple():
    all = []

    def __init__(self , memory_file):
        self.memory = memory_file
        FileUploadSimple.all.append(self)
    
    
    def create_file_upload(self  , file):

        with open(f'{BASE_DIR}/file/{str(file)}'  ,'wb+') as destnation :
            
            for byte in file :
                destnation.write(byte)
                print(byte)
            destnation.close()
        destnation.close()


    def create_file_uploaded(self)->str:
        self.create_file_upload(self.memory)
        print('The Staitc url is ',static(self.__str__()))
        return static(self.__str__())
    

    def __str__(self):
        return str(self.memory)
    
    def __repr__(self):
        return f'{type(self).__name__}({str(self.memory)})'