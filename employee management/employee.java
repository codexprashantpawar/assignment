import java.util.ArrayList;

class Employeee{
	
	int id;
	String name;
	double salary;
	Employeee(int id,String name,double salary){
		this.id=id;
		this.name=name;
		this.salary=salary;
		
		
	}
	
	public void displaydata() {
		System.out.println("Id:"+id+" Name:"+name+" Salary:"+salary);
	}
}
public class employee {
	public static void main(String[] args) {
		Employeee em1=new Employeee(1, "prashant", 20000);
		Employeee em2=new Employeee(2, "Iresh", 35000);
		Employeee em3=new Employeee(1, "Tejas", 100000);
		ArrayList<Employeee> al=new ArrayList<>();
		al.add(em1);
		al.add(em2);
		al.add(em2);
		for (Employeee emp : al) {
			emp.displaydata();
			
		}
		
	}

}