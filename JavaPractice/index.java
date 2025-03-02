public class index {
 public static void duplicate(String str) {
    System.out.print("duplicate words in given array : ");
     String newStr = str.toLowerCase();
     String words[] = newStr.split(" ");
     for(int i=0; i<words.length; i++) {
         String match = words[i];
         int count = 0;
         for(int j=0; j<words.length; j++) {
             if(match === words[j]) {
              count++;
              words[j] = "0";
             }
         }

         if(count > 1 && words[i] != "0") {
           System.out.println(words[i]);
         }
     }
 } 

 public static void main(String[] args) {
      String str = "Hello My Name Is Anthani Gonsalves";
      duplicate(str);
    };
};