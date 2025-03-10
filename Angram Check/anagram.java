public  class anagram{
    public static void main(String args[]){

        String str1 = "listen";
		 String str2 = "silent";
         int sum1=0;
			int sum2=0;
		 if(str1.length()==str2.length()) {
			 
			
			
			
			for (int i = 0; i < str1.length(); i++) {
				sum1+=str1.charAt(i);
				sum2+=str2.charAt(i);
				
			}
			 if(sum1==sum2) {
				 System.out.println("Anagram");
				 		 }
				 		 else {
				 			 System.out.println("Not anagram");
				 		 }
		 }
		 else {
			 System.out.println("Length not Equal");
		 }
    }
}